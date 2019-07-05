import jenkins.model.*
import com.cloudbees.plugins.credentials.*
import com.cloudbees.plugins.credentials.common.*
import com.cloudbees.plugins.credentials.domains.*
import com.cloudbees.plugins.credentials.impl.*
import com.cloudbees.jenkins.plugins.sshcredentials.impl.*
import hudson.plugins.sshslaves.*;

println "--> creating SSH credentials"

domain = Domain.global()
store = Jenkins.instance.getExtensionList('com.cloudbees.plugins.credentials.SystemCredentialsProvider')[0].getStore()

privateKey = new File('/tmp/id_rsa').getText('UTF-8')

slavesPrivateKey = new BasicSSHUserPrivateKey(
CredentialsScope.GLOBAL,
"jenkins-slaves",
"ec2-user",
new BasicSSHUserPrivateKey.DirectEntryPrivateKeySource(privateKey),
"",
""
)

managersPrivateKey = new BasicSSHUserPrivateKey(
CredentialsScope.GLOBAL,
"swarm-managers",
"ec2-user",
new BasicSSHUserPrivateKey.DirectEntryPrivateKeySource(privateKey),
"",
""
)

registryCredentials = new UsernamePasswordCredentialsImpl(
  CredentialsScope.GLOBAL,
  "registry", "Docker Registry credentials",
  "scooter", //TODO: do not check in credentials!
  "!^yQvfUI-/eF(Hdr"
)

store.addCredentials(domain, slavesPrivateKey)
store.addCredentials(domain, managersPrivateKey)
store.addCredentials(domain, githubCredentials)
store.addCredentials(domain, registryCredentials)