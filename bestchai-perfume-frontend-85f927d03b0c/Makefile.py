
import subprocess
from Cheetah.Template import Template

def compile_templates():
    parameters = {"commitSha":getRevision()}
    with open('./template/index_template.html', 'r') as templatefile:
        template = templatefile.read()
    compiled_template = Template(template, searchList=parameters).__str__()
    with open('index.html', 'w') as postfile:
        postfile.write(compiled_template) 

def getRevision():
    p = subprocess.Popen(['hg', 'identify'], stdout=subprocess.PIPE,  stderr=subprocess.PIPE)
    sha, err = p.communicate()
    sha = sha.split()
    return sha[0][:-1]
    

compile_templates()
