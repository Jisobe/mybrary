# Mybrary

Mybrary is a home library cataloging and management app

## Table of Contents

* [Backend Setup](#backend-setup)
* [Frontend Setup](#frontend-setup)
* [Git Workflow](#git-workflow)

## Getting Started: Installing The Project

### **Backend Setup**

* Make sure to clone this repo into your local machine! (No need to fork)

```bash
git clone https://github.com/Jisobe/mybrary.git
```

* Create a virtual environment

```bash
python -m venv .venv
```

* Activate the virtual environment

```bash
source .venv/bin/activate
```

* Install requirements.txt

#### Windows/Linux

```bash
pip install -r requirements.txt
```

#### Mac
  
```bash
pip3 install -r requirements.txt
```

* Create a .env file then generate a new SECRET_KEY for Django settings.py.

```bash
touch .env
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```

**Note: You might need to run it with `python3` instead

**Insert this inside the .env file: `SECRET_KEY = "Paste secret key here"`

* Create the database (Postgresql)

```bash
createdb group_proj_db
```

* If you get an error like this: `Is the server running locally and accepting connections on that socket?` Run this command:

```bash
sudo service postgresql start
```

* Move into `Back-end` directory and migrate the models into your database.

```bash
python manage.py makemigrations
```

Or

```bash
python3 manage.py makemigrations
```

* Run migrate command

```bash
python manage.py migrate
```

Or

```bash
python3 manage.py migrate
```

* Finally, start up the backend server to ensure it's set up successfully.

```bash
cd Back-end
python manage.py runserver
```

Or

```bash
python3 manage.py runserver
```

[Back to Top](#mybrary)

### **Frontend Setup**

* Move into `mybrary_frontend` directory and install packages.

```bash
npm install
```

* Start up the frontend server

```bash
npm start
```

[Back to Top](#mybrary)

## Git Workflow

### **Important note:** Make sure you are committing your changes on your own branch before merging onto the main branch

* Ensure you're in the main branch by checking with: `$ git branch -a`
* Pull from the main branch with this command to get the most up to date version (unless you had just cloned the repo): `$ git pull origin main`
* Create a new branch and name it after the feature you will be working on. Running the following command will switch you to the branch after specifying the name.

```bash
git checkout -b <new-branch>
```

#### (Example: landing page -> `$ git checkout -b landing`)

* Start coding!
* Run commit commands to **your** branch

```bash
git add .
git commit -m "Your message here"
git push origin <branch-name>
```

* To avoid running into conflicts when creating a pull request, checkout into the local main branch and merge it with your custom branch:

```bash
git checkout main
git merge <branch-name>
```

* Submit a pull request. GitHub will notify you if there are any conflicts you need to resolve within the files before being able to merge the changes.

** If there are any issues, run `$ git status` to pinpoint their location.

[Back to top](#mybrary)
