## Flask, React, Webpack, Babel Skeleton for Google App Engine

A skeleton for building Python applications on Google App Engine with
[Flask web framework](http://flask.pocoo.org), [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/).

## Run Locally
1. Install the [App Engine Python SDK](https://developers.google.com/appengine/downloads).
You'll need python 2.7 and [pip 1.4 or later](http://www.pip-installer.org/en/latest/installing.html) installed too.

2. Clone this repo with

   ```
   git clone https://github.com/AxoSal/GAE-Flask-React-Webpack-Babel-skeleton.git
   ```
3. Install Python dependencies in the project's lib directory and install Node dev dependencies.
   Note: App Engine can only import libraries from inside your project directory.

   ```
   cd GAE-Flask-React-Webpack-Babel-skeleton
   pip install -r requirements.txt -t lib
   npm install
   ```
4. Run this project locally from the command line:

   ```
   dev_appserver.py .
   ```
   Visit the application [http://localhost:8080](http://localhost:8080)

   or

   ```
   python main.py
   ```
   And visit the application on [http://localhost:5000](http://localhost:5000)


See [the development server documentation](https://developers.google.com/appengine/docs/python/tools/devserver)
for options when running dev_appserver.

## Deploy
To deploy the application:

1. Use the [Admin Console](https://appengine.google.com) to create a
   project/app id. (App id and project id are identical)
1. [Deploy the
   application](https://developers.google.com/appengine/docs/python/tools/uploadinganapp) with

   ```
   appcfg.py -A <your-project-id> update app.yaml
   ```
1. Congratulations!  Your application is now live at your-app-id.appspot.com

### Relational Databases and Datastore
To add persistence to your models, use
[NDB](https://developers.google.com/appengine/docs/python/ndb/) for
scale.  Consider
[CloudSQL](https://developers.google.com/appengine/docs/python/cloud-sql)
if you need a relational database.

### Installing Libraries
See the [Third party
libraries](https://developers.google.com/appengine/docs/python/tools/libraries27)
page for libraries that are already included in the SDK.  To include SDK
libraries, add them in your app.yaml file. Other than libraries included in
the SDK, only pure python libraries may be added to an App Engine project.

### Feedback
Star this repo if you found it useful. Use the github issue tracker to give
feedback on this repo.

## Author
Axo Sal
