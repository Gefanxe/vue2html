@echo off
REM  說明:
REM     Batch file 啟動 IIS Express 及打開網址
REM  操作:
REM      在檔案總管, 把資料夾或html檔拖到 bat 檔案上即可

@echo off
:getPort
::Set /P oPort=Enter an open port (not listening) (eg: 9335)
SET /A oPort=8%random:~-1%%random:~-1%%random:~-1%
::echo %oPort%
netstat -an | findstr /RC:":%oPort% .*LISTENING" > temp.tmp
::set concat=temp.tmp
set /p concat=<temp.tmp
del temp.tmp
::echo %concat%
IF "%concat%" NEQ "" (
  echo %oPort% is already in use.
  set concat=
  GOTO getPort
)
echo %oPort% is not in use.

IF EXIST %1\NUL (
	SET path=%1
	SET fileName=index.html
	goto runCmd
) ELSE (
	FOR %%i IN ("%1") DO (
		SET path=%%~di%%~pi
		SET fileName=%%~ni%%~xi
	)
)

:runCmd
::goto :eof
rem (最小化視窗) Start /min cmd /c [指令]
Start cmd /c "C:\Program Files\IIS Express\iisexpress.exe" /path:%path% /port:%oPort% /systray:true

Start "------" "http://localhost:%oPort%/%fileName%"
