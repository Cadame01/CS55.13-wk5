//need the node default modules for fs and path
import fs from 'fs';
import path from 'path';

//get filepath to data directory
const dataDir = path.join( process.cwd(), 'data' );

//function returns names and ids for all json obj in array sorted by name property
export function getSortedList() {
  //get filepath to json file
  const filePath = path.join(dataDir, 'pokemon.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');

  //convert string from file into json array obj
  const jsonObj = JSON.parse(jsonString);

  //sort json array by name property
  jsonObj.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
    }
  );

  //use map() on array to extract just id + name props into new array of obj values
  return jsonObj.map(
    function(item) {
      return {
        id: item.id.toString(),
        name: item.name
      };
    }
  );
}

//fucntion returns ids for all json objs in aray
export function getAllIds() {
  //get filepath to json file
  const filePath = path.join(dataDir, 'pokemon.json');
  
  //load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');

  //convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // use map() on array to extract just id + name props into new array of obj values
  return jsonObj.map(
    function(item) {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }
  );
  
}

//function return ALL of props for one single obj with a match id prop value
export async function getData(idRequested) {
  //get filepath to json file
  const filePath = path.join(dataDir, 'pokemon.json');

  //load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');

  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  //find obj value in array that has matching id
  const objMatch = jsonObj.filter(
    function(obj) {
      return obj.id.toString() === idRequested;
    }
  );

  //extract obj value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
    //found pokemon now find all evolutions relating to the pokemon id
    const filePath2 = path.join(dataDir, 'evolution.json');
    //load json file contents
    const jsonString2 = fs.readFileSync(filePath2, 'utf8');
    // convert string from file into json array object
    const jsonObj2 = JSON.parse(jsonString2);
    //find obj value in array that has matching id
    const objMatch2 = jsonObj2.filter(
      function(obj) {
        return obj.owner.toString() === idRequested;
      }
    );
    objReturned.evolution = objMatch2;
    
  } else {
    objReturned = {};
  }

  //return obj value found
  return objReturned;
}