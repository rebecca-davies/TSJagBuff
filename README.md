# TSJagBuff
[![npm version](https://badge.fury.io/js/tsjagbuff.svg)](https://badge.fury.io/js/tsjagbuff)

TSJagBuff is a typescript extension library for `DataView` objects, providing support for Jagex buffer through refactored jagex methods.

## Install & Usage
Navigate to your node project and run the command `npm i tsjagbuff` to add and install the dependency to your project.
Once installed, import the extension into your script like so, to now have access to the common buffer functionality shared by the jagex client.
```ts
import "tsjagbuff"
``` 


#### Example:
```ts
while( true ) {
    switch( buffer.g1() ) {   // 0      reads a single byte
        case 0:                 
          return object;
    }
}
```

```ts
while( true ) {
    switch( buffer.g1() ) {                            
        case 6:                           
          this.name = buffer.gjstr();   // abyssal_whip     reads a byte array and converts to string
          break;                          
    }
}
```

