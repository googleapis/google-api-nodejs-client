@rem Copyright 2018 Google LLC. All rights reserved.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem     http://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.

@echo "Starting Windows build"

cd /d %~dp0
cd ..

@rem npm path is not currently set in our image, we should fix this next time
@rem we upgrade Node.js in the image:
SET PATH=%PATH%;/cygdrive/c/Program Files/nodejs/npm

call nvm use v14.17.3
call which node

call npm install || goto :error
call npm run test || goto :error

goto :EOF

:error
exit /b 1
