vsearch module created by Oluwaseyi Idowu

info for the setup file...
from setuptools import setup

setup(
    name='vsearch',
    version='1.0',
    description='IDTECH Search Tools created from following Head First Python Book',
    author='Oluwaseyi Idowu',
    author_email='idowuseyi22@gmail.com',
    url='idowuseyi.tech',
    py_modules=['vsearch'],
)

commandfor creating the module while in the module folder
python3 setup.py sdist

To install the module (while in the mmodule/dist folder)
sudo python3 -m pip install vsearch-1.0.tar.gz