// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Validates a single path segment matched by a single wildcard (*) or {param}.
// Checks that the segment is not exactly '.' or '..' (directory traversal indicators).
export function validateSingleSegment(
  propertyName: string,
  value: string,
): void {
  if (value === '.' || value === '..') {
    throw new Error(`Invalid value ${value} for ${propertyName}`);
  }
}

// Validates a multi-segment path matched by a double wildcard (**) or {+param}.
// Splitting by slash, it checks that no individual segment is exactly '.' or '..'.
// This segment-by-segment check prevents directory traversal while allowing
// legitimate resource names containing dots (e.g., domain-scoped project IDs).
export function validateMultiSegment(
  propertyName: string,
  value: string,
): void {
  if (value) {
    const segments = value.split('/');
    if (segments.some(segment => segment === '.' || segment === '..')) {
      throw new Error(
        `Value for ${propertyName} must not contain segments that are exactly . or ..`,
      );
    }
  }
}

// Strictly percent-encodes a character to comply with RFC 3986.
// This is necessary because encodeURIComponent natively encodes URL-unsafe
// characters like ?, #, $, &, +, etc., but preserves !, ', (, ), and *.
// To ensure strict compliance, we manually encode those preserved characters.
export function strictEncodeURIComponent(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    character => '%' + character.charCodeAt(0).toString(16).toUpperCase(),
  );
}

export function encodeWithSlashes(str: string): string {
  return [...str]
    .map(c => (c.match(/[-_.~0-9a-zA-Z]/) ? c : strictEncodeURIComponent(c)))
    .join('');
}

export function encodeWithoutSlashes(str: string): string {
  return [...str]
    .map(c => (c.match(/[-_.~0-9a-zA-Z/]/) ? c : strictEncodeURIComponent(c)))
    .join('');
}
