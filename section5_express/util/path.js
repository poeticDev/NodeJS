const path = require('path');

module.exports = path.dirname(process.mainModule.filename); //우리 앱이 실행될 수 있도록 해주는 파일의 경로 표시
//module.exports = path.dirname(require.main.filename); //우리 앱이 실행될 수 있도록 해주는 파일의 경로 표시