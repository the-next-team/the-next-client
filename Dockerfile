# 베이스 이미지로 node 사용
FROM node:18 AS build

# 작업 디렉토리 설정
# WORKDIR /app

# package.json 및 package-lock.json 파일 복사
# COPY package*.json ./

# 의존성 설치
RUN yarn install

# 소스 파일 복사
COPY . .

# 애플리케이션 빌드
RUN yarn react:build

# Nginx를 사용하여 빌드된 애플리케이션을 서빙
FROM nginx:alpine

# 빌드된 파일을 Nginx 웹 디렉토리로 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 설정 파일 복사 (필요한 경우)
# Nginx 기본 설정을 사용한다면 이 줄은 필요 없습니다.
# COPY nginx.conf /etc/nginx/nginx.conf

# Nginx 포트 설정
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
