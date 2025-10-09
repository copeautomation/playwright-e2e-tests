# Staging, Committing, and Pushing Files with Git

4. **Link your local repository to a remote URL:**

```sh
git branch -M main # To match with remote branch name
git remote add origin <remote-url>
```

5. **Confirm local and remote URLs:**

```sh
git remote -v
```
- This command shows the fetch and push URLs for your remote (they should be the same).

6. **Push your first change to the remote repository:**

```sh
git push -u origin main
```
- The `-u` flag sets the upstream (remote tracking) branch.
- If you see an error like `fatal: repository xx not found`, check your user and permissions with:

```sh
git config --list
```
- Make sure you have the right user and permission to commit. If not, add yourself as a collaborator in the GitHub settings and accept the invitation.
- If you still have issues, you can force push:

```sh
git push -f origin main
```
- Then set the remote tracking branch:

```sh
git branch -u origin/main
```

---
