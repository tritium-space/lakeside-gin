touch A.tar.gz
sudo tar -cpf - A.tar.gz src | ssh nilsbir1@lakeside-gin.ch tar -xpf - -C /
