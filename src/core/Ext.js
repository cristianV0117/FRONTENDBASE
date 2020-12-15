class Ext
{
    codigoRandom(chars, lon) {
        let code = "";
        for (let x = 0; x < lon; x++) {
            let rand = Math.floor(Math.random() * chars.length);
            code += chars.substr(rand, 1);
        }
        return code;
    }
    
    generarContrasena() {
        const caracteres = "0123456789abcdefABCDEF";
        const longitud = 12;
        let random = this.codigoRandom(caracteres, longitud);
        return random;
    }
}

export default new Ext();