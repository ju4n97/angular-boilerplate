#!/bin/bash

current_project_name="angular-boilerplate"
current_git_provider="github.com"
current_git_provider_username="juanmesa2097"

# Function to find files recursively
find_files() {
    local files
    files=$(grep -rl --exclude-dir={.git,.angular,node_modules,dist} "$current_project_name" .)
    echo "$files"
}

# Function to prompt for new project name
prompt_project_name() {
    read -rp "▶ Enter new project name: " project_name
    echo "$project_name"
}

# Function to prompt for Git provider selection (Default: github.com)
prompt_git_provider() {
    read -rp "▶ Enter Git provider domain : [github.com] " git_provider
    git_provider=${git_provider:-github.com}
    echo "$git_provider"
}

# Function to prompt for username
prompt_git_provider_username() {
    read -rp "▶ Enter the git provider username: " git_provider_username
    echo "$git_provider_username"
}

# Function to prompt for confirmation (Default: n)
prompt_confirmation() {
    local project_name=$1
    local git_provider=$2
    local git_provider_username=$3

    echo "You are about to rename the project with the following parameters:" >/dev/tty
    echo "Project name:" "$project_name" >/dev/tty
    echo "Git provider:" "$git_provider" >/dev/tty
    echo "Git provider username:" "$git_provider_username" >/dev/tty
    read -rp "▶ Are you sure you want to continue? (y/n): [n] " confirm
    confirm=${confirm:-n}
    echo "$confirm"
}

# Function to process files
process_files() {
    local files=$1
    local project_name=$2
    local git_provider=$3
    local git_provider_username=$4

    for file in $files; do
        sed -i \
            -e "s/$current_project_name/$project_name/g" \
            -e "s/$current_git_provider/$git_provider/g" \
            -e "s/$current_git_provider_username/$git_provider_username/g" \
            "$file"
    done

    echo
    echo "✅ Project renamed to $project_name"
    echo "✅ Git provider: $git_provider"
    echo "✅ Git provider username: $git_provider_username"
}

# Main script logic
files=$(find_files)

# Display files found
echo "Results found for $current_project_name"
echo "$files"
echo

project_name=$(prompt_project_name)
git_provider=$(prompt_git_provider)
git_provider_username=$(prompt_git_provider_username)
confirm=$(prompt_confirmation "$project_name" "$git_provider" "$git_provider_username")

# Process files if confirmed
if [ "$confirm" == "y" ] || [ "$confirm" == "Y" ]; then
    process_files "$files" "$project_name" "$git_provider" "$git_provider_username"
else
    echo "❌ Renaming and text replacement canceled."
fi
