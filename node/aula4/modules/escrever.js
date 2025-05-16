const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w' });
}


// fs.writeFile(caminhoArquivo, json, { flag: 'w', encoding: 'utf-8' });

// fs.writeFile(caminhoArquivo, json, { flag: 'w', encoding: 'utf-8' }); // w = write, a = append // \n para quebra de linha