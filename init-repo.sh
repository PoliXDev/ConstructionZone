#!/bin/bash

# Script para inicializar un repositorio Git y prepararlo para GitHub Pages

# Colores para la salida
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Inicializando repositorio Git...${NC}"
git init

echo -e "${BLUE}Añadiendo archivos al repositorio...${NC}"
git add .

echo -e "${BLUE}Realizando el primer commit...${NC}"
git commit -m "Primer commit: Página en construcción"

echo -e "${YELLOW}Ahora debes ejecutar los siguientes comandos:${NC}"
echo -e "${GREEN}git remote add origin https://github.com/PoliXDev/ConstructionZone.git${NC}"
echo -e "${GREEN}git branch -M main${NC}"
echo -e "${GREEN}git push -u origin main${NC}"

echo -e "${YELLOW}Y para desplegar en GitHub Pages:${NC}"
echo -e "${GREEN}npm run deploy${NC}"

echo -e "${BLUE}¡Listo! Tu repositorio ha sido inicializado.${NC}" 