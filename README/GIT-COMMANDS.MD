How to Push Folders From Local PC to GitHub using Git Commands?
Last Updated : 16 May, 2024
Git offers a powerful command-line interface for managing code repositories, understanding how to push folders from your local PC to GitHub repositories using Git commands can enhance your workflow and streamline the process of sharing code with collaborators or deploying projects.

In this article, we’ll see the step-by-step process of pushing folders from your local PC to GitHub using Git commands.

Why Push Folders to GitHub?
Pushing folders from your local PC to GitHub repositories is important for several reasons:

Code Sharing: Uploading folders to GitHub allows you to share your codebase with collaborators, contributors, or the wider community.
Backup and Versioning: By storing your code on GitHub, you benefit from version control, enabling you to track changes, revert to previous states, and maintain a backup of your project.
Collaboration: Pushing folders to GitHub facilitates collaboration by providing a centralized platform for team members to access, review, and contribute to the codebase.
Steps To Push Folders to GitHub
First of all, make sure to install Git on your computer. Now, head toward that folder that you want to push there on GitHub. Then, follow the following steps. 

Step 1. Open Git Bash in that particular folder. Type git init (this will make that folder a repository)


Git initialization

Step 2: Type git add . (this will add all files to the repository)


Git add

Step 3. Type git commit -m “Initial commit msg” (all files now in the repository)


git commit -m “Initial commit msg

Step 4. Type git status (you will get a msg, “On branch master nothing to commit, working tree clean” this shows your local repository is finally created)


git status

These are the steps that are used to make a local repository, now to push the same to a GitHub repository we use the following steps-
Step 1. Open your GitHub profile and create a New Repository. Copy the SSH Key of that created repository.


creating new repository

Step 2. Open Git Bash in that particular folder that you want to push. Type git remote add origin PASTE_SSH_KEY_OF_CREATED_REPO. Then type git push origin master –force (type ‘main’ in place of the ‘master’ if your default branch is master). Please refer to the following picture (if needed):


How to Push Folders From Local PC to GitHub using Git Commands?

Now, refresh your Github page, you will be able to see your committed folders/files there.