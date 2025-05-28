#!/bin/bash

# Script de despliegue para ReparatuCarro.com
# Autor: Daniel Alejandro Ruiz Poli

echo "🚗 Iniciando despliegue de ReparatuCarro.com..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Verificar que Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado."
    exit 1
fi

# Verificar que npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm no está instalado."
    exit 1
fi

echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias."
    exit 1
fi

echo "🔨 Construyendo el proyecto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error al construir el proyecto."
    exit 1
fi

echo "✅ Build completado exitosamente."

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI no está instalado."
    echo "📥 Instalando Vercel CLI..."
    npm install -g vercel
fi

echo "🚀 Desplegando en Vercel..."

# Preguntar si es despliegue de producción
read -p "¿Es este un despliegue de producción? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌟 Desplegando en PRODUCCIÓN..."
    vercel --prod
else
    echo "🧪 Desplegando en PREVIEW..."
    vercel
fi

if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue completado exitosamente!"
    echo "🌐 Tu sitio está ahora disponible en Vercel."
else
    echo "❌ Error durante el despliegue."
    exit 1
fi

echo "🎉 ¡ReparatuCarro.com desplegado con éxito!" 