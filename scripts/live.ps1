# Promote development to live (main) and push so Vercel can deploy.
# Usage:
#   npm run live

$ErrorActionPreference = "Stop"

$pending = git status --porcelain
if ($pending) {
  Write-Host "You have unsaved changes. Saving them to development first..."
  & "$PSScriptRoot\save.ps1" "chore: save work before going live"
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

git checkout development
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git push -u origin development
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git fetch origin
git checkout main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git pull origin main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git merge development --no-edit
if ($LASTEXITCODE -ne 0) {
  Write-Host "Merge into main failed. Resolve conflicts, then run npm run live again."
  exit $LASTEXITCODE
}

git push origin main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git checkout development
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Live is updated. You are back on development."
