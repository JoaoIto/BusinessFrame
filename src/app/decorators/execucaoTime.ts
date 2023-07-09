export function execucaoTime(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor){

            const method = descriptor.value;
            descriptor.value = function(){
                const t1 = performance.now();
                const returnMethod = method();
                const t2 = performance.now();

                console.log(`O tempo de performance do método de ${propertyKey} foi: ${(t2 - t1) / 1000} seg!`);
                returnMethod;
            }
            return descriptor;
    }
}