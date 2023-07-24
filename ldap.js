const ldap = require('ldapjs')
const { authenticate } = require('ldap-authentication')
console.log( authenticate() )
