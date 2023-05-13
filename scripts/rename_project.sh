#!/bin/bash

current_project_name="angular-boilerplate"
current_git_provider="github.com/juanmesa2097"
current_git_username="juanmesa2097"

# Function to find files recursively
find_files() {
    local files
    files=$(grep -rl --exclude-dir={.git,.angular,node_modules,dist} "$current_project_name" .)
    echo "$files"
}

# Function to prompt for new project name
prompt_project_name() {
    read -rp "▶ Enter new project name: [current: $current_project_name] " project_name
    project_name=${project_name:-"$current_project_name"}
    echo "$project_name"
}

# Function to prompt for Git provider
prompt_git_provider() {
    read -rp "▶ Enter Git provider: [current: $current_git_provider] " git_provider
    git_provider=${git_provider:-"$current_git_provider"}
    echo "$git_provider"
}

# Function to prompt for Git username
prompt_git_username() {
    read -rp "▶ Enter Git username: [current: $current_git_username] " git_username
    git_username=${git_username:-"$current_git_username"}
    echo "$git_username"
}

# Function to prompt for confirmation (Default: n)
prompt_confirmation() {
    local project_name=$1
    local git_provider=$2
    local git_username=$3

    if [[ "$project_name" == "$current_project_name" && "$git_provider" == "$current_git_provider" && "$git_username" == "$current_git_username" ]]; then
        echo "The parameters remained unchanged. No renaming and text replacement required." >/dev/tty
        exit 0
    fi

    echo "You are about to rename the project with the following parameters:" >/dev/tty
    echo "Project name:" "$project_name" >/dev/tty
    echo "Git provider:" "$git_provider" >/dev/tty
    echo "Git username:" "$git_username" >/dev/tty
    read -rp "▶ Are you sure you want to continue? (y/n): [n] " confirm
    confirm=${confirm:-n}
    echo "$confirm"
}

# Function to process files
process_files() {
    local files=$1
    local project_name=$2
    local git_provider=$3
    local git_username=$4

    for file in $files; do
        sed -i \
            -e "s|$current_git_provider|$git_provider|g" \
            -e "s|$current_git_username|$git_username|g" \
            -e "s|$current_project_name|$project_name|g" \
            "$file"
    done

    echo
    echo "✅ Project renamed to $project_name"
    echo "✅ Git provider: $git_provider"
    echo "✅ Git username: $git_username"
}

# Main script logic
files=$(find_files)

# Display files found
echo "Results found for $current_project_name"
echo "$files"
echo

project_name=$(prompt_project_name)
git_provider=$(prompt_git_provider)
git_username=$(prompt_git_username)

confirm=$(prompt_confirmation "$project_name" "$git_provider" "$git_username")

# Process files if confirmed
if [ "$confirm" == "y" ] || [ "$confirm" == "Y" ]; then
    process_files "$files" "$project_name" "$git_provider" "$git_username"
else
    echo "❌ Renaming and text replacement canceled."
fi
