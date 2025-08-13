const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = '123456';
    const hash = await bcrypt.hash(password, 10);

    console.log('='.repeat(50));
    console.log('🔐 HASH GENERADO PARA PASSWORD: 123456');
    console.log('='.repeat(50));
    console.log('Hash:', hash);
    console.log('='.repeat(50));
    console.log('Copia este hash y reemplázalo en MOCK_USERS');
    console.log('='.repeat(50));

    // Verificar que funciona
    const isValid = await bcrypt.compare('123456', hash);
    console.log('✅ Verificación:', isValid ? 'CORRECTO' : 'ERROR');
}

generateHash().catch(console.error);