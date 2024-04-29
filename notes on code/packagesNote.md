## These notes are on the packages in node 

- you can use core modules in node using the require method 
  - and the core modules are moudles that is in node itself and you don't need to install them from a third party 
- you can build your own modules
- you can use npm to use third party modules 
  - as an example over this => slugify

- ## about the packages
  - there are four things at every package you should know `^1.3.7`
    - last number which is 7 refere to patch number
      - a number change whenever there is a bug fix at the module the developers found a bug at the module and want to fix it
    - the previous last number which is 3 represents the minor changes where
      - if there is a new feature added to the module without affecting the working of it then it will increase
    - the first number which is 1 represents the major changes where
      - if the whole module functionality changes it will increase and this might make the apps which works with the older versions doesn't work
    - the simbole which is ^ determine which changes and updates are acceptable for theis moulde `^` => means we accept minor and patch releases
      - `~` => this is for patch releases `and it's the safest`
      - `*` => this is for all releases `and it's dangrous`
    - to install a specific version => `npm install slugify@1.0.0`
    - to see the outdated packages to update them => `npm outdated`
    - to update some package the is outdated => `npm update slugify`
    - to uninstall a package => `npm uninstall slugify`
  - `Note` => don't include node_mouldes folder 
    - instead of this run => `npm install`
    - but share these two files because they are important
      - package-lock.json
      - package.json

