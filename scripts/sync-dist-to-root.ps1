param(
  [Parameter(Mandatory = $false)]
  [string]$RepoRoot = "."
)

$ErrorActionPreference = "Stop"

$repoRootPath = (Resolve-Path $RepoRoot).Path
$distPath = Join-Path $repoRootPath "dist"

if (-not (Test-Path $distPath)) {
  throw "dist directory not found: $distPath"
}

$preserveNames = @(
  ".git",
  ".github",
  ".gitignore",
  ".npmrc",
  ".nojekyll",
  ".umirc.ts",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "typings.d.ts",
  "README.md",
  "CNAME",
  "src",
  "scripts",
  "dist",
  "node_modules"
)

Get-ChildItem -LiteralPath $repoRootPath -Force | Where-Object {
  $preserveNames -notcontains $_.Name
} | Remove-Item -Recurse -Force

Copy-Item -Path (Join-Path $distPath "*") -Destination $repoRootPath -Recurse -Force

$noJekyllPath = Join-Path $repoRootPath ".nojekyll"
if (-not (Test-Path $noJekyllPath)) {
  New-Item -ItemType File -Path $noJekyllPath | Out-Null
}

Write-Host "Synced dist into repo root: $repoRootPath"
