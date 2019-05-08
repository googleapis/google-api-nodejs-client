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

@rem The image we're currently running has a broken version of Node.js enabled
@rem by nvm (v10.15.3), which has no npm bin. This hack uses the functional
@rem Node v8.9.1 to install npm@latest, it then uses this version of npm to
@rem install npm for v10.15.3.
call nvm use v8.9.1 || goto :error
call node C:\Users\kbuilder\AppData\Roaming\nvm-ps\versions\v8.9.1\node_modules\npm-bootstrap\bin\npm-cli.js i npm -g || goto :error
call nvm use v10.15.3 || goto :error
call node C:\Users\kbuilder\AppData\Roaming\nvm-ps\versions\v8.9.1\node_modules\npm\bin\npm-cli.js i npm -g || goto :error

call npm install || goto :error
call npm run test || goto :error

goto :EOF

:error
exit /b 1
