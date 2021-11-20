cat *.part.prisma > ../schema.prisma

npm install prisma

npx prisma migrate dev