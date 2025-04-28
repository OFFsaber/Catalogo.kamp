# Script para configurar o Git permanentemente no sistema
$gitPaths = @(
    "C:\Program Files\Git\bin",
    "C:\Program Files\Git\cmd"
)

# Obter o PATH atual
$currentPath = [Environment]::GetEnvironmentVariable("Path", "Machine")

# Verificar se os caminhos já existem
foreach ($path in $gitPaths) {
    if (-not $currentPath.Contains($path)) {
        $currentPath += ";" + $path
    }
}

# Atualizar o PATH
[Environment]::SetEnvironmentVariable("Path", $currentPath, "Machine")

Write-Host "Git configurado com sucesso! Por favor, reinicie o PowerShell para que as alterações tenham efeito." 