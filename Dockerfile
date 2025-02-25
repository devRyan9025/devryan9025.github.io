# Nginx 기반 이미지 사용
FROM nginx:latest

# 작업 디렉토리 설정
WORKDIR /usr/share/nginx/html

# 기존 Nginx 기본 파일 삭제
RUN rm -rf ./*

# 현재 디렉토리의 모든 파일을 컨테이너의 Nginx 폴더에 복사
COPY . .

# Nginx 실행 (기본적으로 CMD ["nginx", "-g", "daemon off;"] 포함됨)
