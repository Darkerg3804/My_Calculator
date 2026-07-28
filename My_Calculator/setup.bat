@echo off
echo ============================================
echo  INSTALADOR DE CALCULADORA REACT
echo ============================================
echo.

echo [1/4] Verificando Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js NO esta instalado.
    echo.
    echo Por favor, instala Node.js desde:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo ✅ Node.js encontrado: 
node --version
echo.

echo [2/4] Verificando npm...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm NO esta instalado.
    pause
    exit /b 1
)
echo ✅ npm encontrado: 
npm --version
echo.

echo [3/4] Instalando dependencias...
echo Esto puede tomar unos minutos...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error al instalar dependencias.
    pause
    exit /b 1
)
echo ✅ Dependencias instaladas correctamente.
echo.

echo [4/4] Instalando mathjs...
call npm install mathjs
if %errorlevel% neq 0 (
    echo ❌ Error al instalar mathjs.
    pause
    exit /b 1
)
echo ✅ mathjs instalado correctamente.
echo.

echo ============================================
echo  ¡INSTALACION COMPLETADA!
echo ============================================
echo.
echo Para iniciar la calculadora, ejecuta:
echo   npm run dev
echo.
pause