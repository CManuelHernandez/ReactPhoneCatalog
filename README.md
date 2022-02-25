# ReactPhoneCatalog

Catalog of phones and their details displayed in a Front made with React.
This catallog works with an API model for the management of a phone site through a CRUD.
It runs with express on a MongoDB database.
Therefore, for its operation, the following steps will be needed in a Terminal already with NodeJs.

**You need node installed on the computer where you want to run this application**

## Go to the folder of the API "ResApi" first then

## Install

From the root folder _(ResApi)_ we will install the dependencies using the terminal and the following command.

```shell
npm i
```

### _Loading the databases:_

To load or reset data from the _MongoDB_ database, you need to run the _install_db_ file found in the _scripts_ folder.
This is done using the following command.

```
npm run installDB
```

We should receive the following feedback in the terminal.

```
###############################
Data uploaded successfully
###############################
```

After this we will cancel the terminal process.

```
ctrl + c
```

## Start app

Start the app for production use:

```shell
npm start
```

## API methods

GET /phones
List of Phones

POST /phones (body)
Create an Phones. It must be found in the body

PUT /phones:id (body)
Update an Phones.

DELETE /phones:id
Delete an Phones.

## Examples of api operation ⚙️

### Starting from the URL http://localhost:3000/phones

Example of the structure of a phone for the api

```
[
    {
        "_id": "621896b9b8bd7f26ccb467ec",
        "name": "iPhone 13",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur",
        "color": "black",
        "price": 845,
        "imageFileName": "images/iphone13.png",
        "screen": 6,
        "processor": "Apple A15",
        "ram": 4,
        "__v": 0
    },...
```

## Now for the Front Go to the folder of the REACTAPP "reactapp" first then

## Install

From the root folder _(reactapp)_ we will install the dependencies using the terminal and the following command.

```shell
npm i
```

## Run the App

```shell
npm start
```

## Run the Test

```shell
npm run test
```

## Autor ✒️

- **CManuelHernandez** - - [CManuelHernandez](https://github.com/CManuelHernandez)
