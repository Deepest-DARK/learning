# GIT CLI
### _`git` is a version control system that allows you to track changes in the file and folders._

>#### git structure
```
git init   ---> working directory
 | 
git add    ---> staging area
 |
git commit ---> Repo
 |
git push   ---> Github
```
## Initialize

### Check status if its already exist or not

```git
git status
```
#### output

>_fatal: not a git repository (or any of the parent directories): .git_

### Initializing git
```git 
git init
```

>[!CAUTION]
> _check first `.git` exist or not using `git status` else git will simply reinitialize the repository and potentially mess with the submodule configurations_

### Setting the config

> [!TIP]
>#### `--global` optional flag if you want to apply the configuration setting to all repositories for the current user
>#### use Title Case in user.name recommended
```git
git config user.name  "Your Name"
```
```git
git config user.email "user@example.com"
```
>#### to change the code editor
```git
git config core.editor "vim
```
### To check if its config properly or not 

```git
git config --list
```

## Staging area

### Stage files (tell Git what to track)

>#### it will add all the files present in the current directory
```git
git add . 
```
>#### manually add
```git
git add <filename1> <filename2>
```
>#### check if it is added or not
```git
git status
```

>#### unstage the file  
```git
git restore --staged <filename1> <filename2> 
```

## Commit

### Commit the changes (save a snapshot)

```git
git commit -m "your_message"
```

### log commits
```git
git log
```

>#### log the commit in compact format
```git
git log --oneline
```

>#### shows all changes to HEAD in detail
```git
git reflog
```

>#### view specifig commit
```git
git reflog <commit-hash>
```

### recover lost commits
>[!CAUTION]

>_mode : --hard If you want to  resets the staging area and the working directory. All uncommitted changes are lost.
--soft Keeps changes in the staging area . Doesn't touch your working directory_


>#### using commit hash
```git
git reset <mode> <commit-hash>
```

>#### using head index
```git
git reset <mode> HEAD@{<index>}
```

## Branches

<img src="branches.png" width="500" height="300" style="background-color: white;">

### View all and current branch

```git
git branch
```

### Create a new branch

```git
git branch <branch-name>
```

### Switch to new branch

>#### modern approach
```git
git switch <branch-name>
```

>#### older git versions use
```git
git checkout <branch-name>
```

### Create a new branch and immediately switch

>#### modern approach
```git
git switch -c <branch-name>
```

>#### older git versions use
```git
git checkout -b <branch-name>
```
#### Delete a branch
```git
git branch -d <branch-name>
```

## Merge
### Combines the changes from one branch into another

>[!NOTE]
>#### Ensure you are on the branch where you want to merge

```git
git merge <branch-name>
```

>[!CAUTION]
>_it's generally not recommended to do `git rebase` on the `main branch`, it rewrite history that's one of its core behaviors._
```git
git rebase <branch-name>
```

## Stash
### switching to branch without commit

```git
git stash
```

>#### to give a message
```git
git stash save "your_message"
```

### View all the stash

```git
git stash list
```

### Use the stored stash

>#### for one-time use
```git 
git stash pop
```

>#### for keeping the stash
```git
git stash apply
```

>#### apply a specific stash 
```git
git stash apply stash@{<index>}
```

### Delete a stash

>#### to delete the top stash
```git
git stash drop
```

>#### delete a specific stash
```git
git stash drop stash@{<index>}
```

## Difference
### For comparing changes

>#### comparing staging area
```git
git diff --staged
```

>#### comparing the differences between two specific commits
```git
git diff <commit1-sha-hash> <commit2-sha-hash>
```

>#### comparing the two branches
```git
git diff <branch1> <branch2>
```

>#### alternative method
```git
git diff <branch1>..<branch2>
```

## Tags

#### create a new tag
```git
git tag <tag-name>
```

#### to view all the tags
```git
git tag
```

#### creates an annotated tag
```git
git tag -a first <commit-sha-hash> -m "your_message"
```

#### delete a tag
```git
git tag -d <tag-name>
```

## Push to remote (GitHub)

### setting up connection
```git
git remote add origin <repository-url>
```

### View changes
```git 
git remote -v
```

### Sending your commits from your local repository to a remote repository
```git
git push origin <main-branch>
```
