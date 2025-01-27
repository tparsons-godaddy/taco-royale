
### Command Line
- Clear cache in tests - `npm run test:unit -- --clearCache`
- Dependency versions - `npm view @wsb/config-api-client versions`
- Check dependencies of dependencies - `npm view @wsb/config-api-client dependencies`
- Fix outdated dependencies - `npm audit fix`
- View all files in Home (~) folder - `ls -la ~`

### NPM Setup
- [npmrc setup](https://godaddy-corp.atlassian.net/wiki/spaces/MWCENG/pages/53150095/Javascript+Setup) - Use jFrog credentials
- [Change node version](https://www.bairesdev.com/blog/change-node-version/)
<details>
<summary>View npmrc file</summary>
- `cat .npmrc`
- `open ~/.npmrc`
</details>

### Check which host is running

- `lsof -i:8445` - use port number
- `kill -9 72291` - remove using pid

### Terminal Improvements
<details>
<summary>Beautify git commit logs</summary>
- `git log --graph --oneline --decorate --all` git commit check
- `git log --color --graph --pretty=format:'%Cred%h%Creset - %C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit`
- `log --graph --pretty=format:'%C(yellow)%h%Creset %m %C(bold yellow)%d%Creset %C(cyan)(%G?) %n%s%+b%n%Cgreen%cr %C(italic magenta)<%an>%Creset' --abbrev-commit --date=relative`
</details>
