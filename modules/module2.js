// Ex create a module that exports a function to depluralise a word (food specifically)

// python version: (from: scan_for_each_data.py)
//def singular(ingredient):
//    singular_ingredient = ''
//
//    # end in s but are singular, or have no plural
//    exceptions = {'beef silverside w&s','lemon grass', 'vegetable samosa indian takeaway mrs'}
//    
//    # if it doesn't end in s and has no plural should come out fine!
//    #, 'fish', 'mutton', 'hogget'}
//    
//    if ingredient in exceptions:
//        return ingredient
//    
//    # exceptions with singular version
//    singular_from_plural = {
//        'radishes'          : 'radish',
//    }    
//    
//    if ingredient in singular_from_plural:
//        return singular_from_plural[ingredient]
//
//    if re.search(r'cloves$',ingredient):           # es
//        return re.sub(r'cloves$','clove',ingredient)
//
//    if re.search(r'cookies$',ingredient):           # ies/es/y - all sorts of cookie flavours
//        return re.sub(r'cookie$','y',ingredient)
//
//    if re.search(r'ies$',ingredient):               # cherries to cherry
//        return re.sub(r'ies$','y',ingredient)
//
//    if re.search(r'olives$',ingredient):           # es
//        return re.sub(r'olives$','olive',ingredient)
//
//    if re.search(r'ves$',ingredient):               # leaves to leaf, halves to half
//        return re.sub(r'ves$','f',ingredient)
//
//    if re.search(r'oes$',ingredient):                # tomatoes to tomato
//        #print(f"OES - - - - * {ingredient}")
//        return re.sub(r'oes$','o',ingredient)
//        
//    if re.search(r'ii$',ingredient):                # octopii to octopus - never seen octopii in recipe but hey!
//        return re.sub(r'ii$','us',ingredient)
//
//    return re.sub(r's$','',ingredient)


//   // from: // https://www.samanthaming.com/tidbits/79-module-cheatsheet/
//   // Name Export | Name Import - - - - - - - - - - - - - - - - - - - - 
//   export const name = 'value';
//   import { name } from '...';
//   
//   // Default Export | Default Import - - - - - - - - - - - - - - - - - 
//   export default 'value';
//   import anyName from '...';
//   
//   // Rename Export | NameImport - - - - - - - - - - - - - - - - - - - 
//   export { name as newName }
//   import { newName } from '...'
//   
//   // Name + Default | Import All - - - - - - - - - - - - - - - - - - -
//   export const name = 'value'
//   export default 'value'
//   import * as anyName from '...'
//   
//   // Export List + Rename | Import List + Rename - - - - - - - - - - - 
//   export {
//     name1,
//     name2 as newName2
//   }
//   import {
//     name1 as newName1,
//     newName2
//   } from '...'

// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - ES6 standard
// https://www.youtube.com/watch?v=GQ96b_u7rGc - great history lesson!
// from 39m38 ^
// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - ES6 standard


var singular = function(ingredient){
  console.log(`module1: singular${ingredient}`); 
};


export {
  singular
} 
