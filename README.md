# Auction-WebApp
ABH Internship Auction App

## Deployment Guide

Next steps describe how to deploy code using Git and Heroku Git remotes.  
Prerequisites are to install Git and the Heroku CLI:
- [Git installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Heroku CLI installation instructions](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

Before the app can be deployed to Heroku, local Git repository needs to be initialized and application code commited to it. 
You can check this by running the following command at the root of your project:
`git status`

For creating a new Heroku app run the following command in the root of the project: 
`heroku create <app name>`

Once the app is created, you can run `git remote -v` to verify that the Heroku remote URL was added by the Heroku CLI.

Fot an existing app add a remote to your local repository with the heroku `git:remote command`

To deploy your app to Heroku, first commit all the project files using commands  
```
git add -A   
git commit -m "Pushing to Heroku" 
```
and then use the `git push` command to push the code from your local repository’s main branch to your heroku remote.

 In case of an error, you can view the Heroku logs by running the following command: `heroku logs --tail`
