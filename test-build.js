#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 Verificando build de ReparatuCarro.com...\n');

const distDir = './dist';
const requiredFiles = [
  'index.html',
  'assets'
];

// Verificar que la carpeta dist existe
if (!fs.existsSync(distDir)) {
  console.error('❌ Error: La carpeta dist no existe. Ejecuta npm run build primero.');
  process.exit(1);
}

console.log('✅ Carpeta dist encontrada');

// Verificar archivos requeridos
requiredFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} encontrado`);
  } else {
    console.error(`❌ ${file} no encontrado`);
    process.exit(1);
  }
});

// Verificar contenido de assets
const assetsDir = path.join(distDir, 'assets');
const assets = fs.readdirSync(assetsDir);

console.log('\n📁 Archivos en assets:');
assets.forEach(asset => {
  const assetPath = path.join(assetsDir, asset);
  const stats = fs.statSync(assetPath);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  if (asset.includes('intro') && asset.endsWith('.mp4')) {
    console.log(`✅ Video: ${asset} (${sizeInMB} MB)`);
  } else if (asset.includes('logo') && asset.endsWith('.svg')) {
    console.log(`✅ Logo SVG: ${asset} (${sizeInMB} MB)`);
  } else if (asset.includes('logo') && asset.endsWith('.png')) {
    console.log(`✅ Logo PNG: ${asset} (${sizeInMB} MB)`);
  } else {
    console.log(`📄 ${asset} (${sizeInMB} MB)`);
  }
});

// Verificar contenido del HTML
const htmlPath = path.join(distDir, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

console.log('\n🔍 Verificando HTML:');

// Verificar que las rutas de assets están correctas
if (htmlContent.includes('/assets/intro-') && htmlContent.includes('.mp4')) {
  console.log('✅ Ruta del video correcta en HTML');
} else {
  console.error('❌ Ruta del video incorrecta en HTML');
}

if (htmlContent.includes('/assets/reparatucarro_logo-') && htmlContent.includes('.svg')) {
  console.log('✅ Ruta del logo SVG correcta en HTML');
} else {
  console.error('❌ Ruta del logo SVG incorrecta en HTML');
}

// Verificar meta tags importantes
const metaTags = [
  '<title>ReparatuCarro.com',
  'meta name="description"',
  'meta property="og:title"',
  'meta name="theme-color"'
];

metaTags.forEach(tag => {
  if (htmlContent.includes(tag)) {
    console.log(`✅ ${tag} encontrado`);
  } else {
    console.error(`❌ ${tag} no encontrado`);
  }
});

console.log('\n🎉 ¡Verificación completada!');
console.log('📋 El build está listo para desplegar en Vercel.');
console.log('\n🚀 Próximos pasos:');
console.log('1. git add .');
console.log('2. git commit -m "Build optimizado para Vercel"');
console.log('3. git push origin main');
console.log('4. Conectar repositorio en vercel.com'); 