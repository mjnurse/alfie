:: Step 1: Add all changed files to your local git repository.
::         This marks all the files which are changed in the local repository.
git add --all
:: Step 2: Show all changes to your local git.
git status
:: Step 3: Commit all changes to your local git - This saves the changes in the local repository.
::         Use -m to add a commit message "stuff" - this can be anything.
git commit -m "stuff"
:: Step 4: Push (ie copy) all the changes to your local git to GitHub.
git push github main
