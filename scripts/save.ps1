# Save local work to the development branch and push.
# Usage:
#   npm run save
#   npm run save -- "feat: update project copy"

$ErrorActionPreference = "Stop"

$Message = if ($args.Count -gt 0) { ($args -join " ").Trim() } else { "chore: save work" }

function Ensure-DevelopmentBranch {
  $current = (git rev-parse --abbrev-ref HEAD).Trim()
  if ($current -eq "development") { return }

  git show-ref --verify --quiet refs/heads/development
  if ($LASTEXITCODE -eq 0) {
    git checkout development
  } else {
    git checkout -b development
  }

  if ($LASTEXITCODE -ne 0) {
    throw "Could not switch to the development branch."
  }
}

Ensure-DevelopmentBranch

git add -A
$pending = git status --porcelain
if (-not $pending) {
  Write-Host "Nothing new to commit. Pushing development..."
  git push -u origin development
  exit $LASTEXITCODE
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git push -u origin development
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Saved and pushed to development."
