#### **backend-entrega-01**
___
## Clases con ECMAScript y ECMAScript avanzado

### **Consigna**

* Realizar una clase “ProductManager” que gestione un conjunto de productos.

*Te acercamos esta ayuda* 👉 [Hands on lab sobre creación de clases](https://docs.google.com/presentation/d/1x9kVx6k5RlVk4_ELHtL8epQWGKjN5H8Fwc2TaE8rHKQ/edit#slide=id.g11af22068b0_8_697) (clase 1)**

### **Aspectos a incluir**

* Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

* Cada producto que gestione debe contar con las propiedades:
    - title (nombre del producto)
    - description (descripción del producto)
    - price (precio)
    - thumbnail (ruta de imagen)
    - code (código identificador)
    - stock (número de piezas disponibles)

* Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    - Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    - Al agregarlo, debe crearse con un id auto-incrementable

* Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

* Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    - En caso de no coincidir ningún id, mostrar en consola un error “Not found”

### **Formato del entregable**

* Archivo de Javascript listo para ejecutarse desde node.

### **Testing**

* Proceso de testing de este entregable [descargue desde aquí](https://docs.google.com/document/d/1RUkOh3sNySZWtLnj4sI6uy1Ecu7q0WfpySXRvgi5kn4/edit#) ✅

### **Entregable**

Por favor, [descargue desde aquí](https://github.com/jmquintana/backend-entrega-01/archive/master.zip) el entregable.


### **Muchas gracias!**

Made by **José María Quintana** { [josemqu](https://github.com/jmquintana/) } 🤓