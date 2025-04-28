@echo off
REM Script para atualizar o repositório no GitHub

REM Adiciona todas as alterações
git add .

REM Solicita mensagem de commit ao usuário
set /p msg="Digite a mensagem do commit: "

REM Faz o commit
git commit -m "%msg%"

REM Envia para o repositório remoto
git push

pause 