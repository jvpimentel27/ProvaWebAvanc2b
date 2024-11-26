import jwt from 'jsonwebtoken';

interface User{
    email: string;
    password: string;
}

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAprmio0VJ9mr6ilsPTS2x
r6SMl6/3V9P1cuw4yh9IK4qaZab/wXH36CAt8+ZoARsDXlVFNTIrJi0oaVZbElxZ
nQjI65hZvCZOL9dWTNSWKAhi2TNs4gj3LE4kCg22XMIPWoZTWpfy7oDLay14Tq97
aqYw9de14XYzX00eRh60+O66VQt5OAiq1ntmz1Nsbrbotj0wM1KbKCRaTeEuqT+H
F8H9O/UlIuPZeGupR9/RDcTZjm4zDa2HtJT1uk67uj6qqWFVpc+meZNzngK/d4LS
2bDXp3tN3aQ0Tmvq8u7pIhQwPJJVg1ApCC5ALW1Y+abLbrLUhNsALj+/H6Ouzmss
1QIDAQAB
-----END PUBLIC KEY-----`

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAprmio0VJ9mr6ilsPTS2xr6SMl6/3V9P1cuw4yh9IK4qaZab/
wXH36CAt8+ZoARsDXlVFNTIrJi0oaVZbElxZnQjI65hZvCZOL9dWTNSWKAhi2TNs
4gj3LE4kCg22XMIPWoZTWpfy7oDLay14Tq97aqYw9de14XYzX00eRh60+O66VQt5
OAiq1ntmz1Nsbrbotj0wM1KbKCRaTeEuqT+HF8H9O/UlIuPZeGupR9/RDcTZjm4z
Da2HtJT1uk67uj6qqWFVpc+meZNzngK/d4LS2bDXp3tN3aQ0Tmvq8u7pIhQwPJJV
g1ApCC5ALW1Y+abLbrLUhNsALj+/H6Ouzmss1QIDAQABAoIBADDzjCb37xFks47v
0XxNkEALxiO7TJoC56wIY1wk9yGhnld+QtVfSvRijltwKNU6QzDtRFasFjMtSxIy
gqbPaphKvgM+RgqSDJ7LUNFaEYRLggpXqP5st3XQs5AoGoT9jVh82/hbaL5SHmen
gA1KRKg5h2KHJSW/eLHgiKT52xTDOSkpczBtKNjXba7w9yq9KWAJZ464uqWtXvvD
ahTZlQrcrQsNLV2AvIzRYyp+lB0AnXfZaOeI5QiFn4/WE0yG94NC5c+Gvw1Tyv+1
ZY6Rf8U2HpjRAIZSekZAGG0lsnvfVB/bkoFiqLkYJ1MVF4hwCvOMPdxd4Bnz/pMc
bTEZMkECgYEA4orIhw/rjk16+J/ya7oyZBTm+punAyDOEJSkjY1Go4X/FDTiKaF5
HW3E3xlhaEO7nv+lPg370GhIKpuEg1Aq6IF3JJft55HpnkfKnopamHM5hz+9v+xI
ZYIlOMHQbeULHvE/Q66UsJOMNKCvyQmv8kCKOXBpX3/a15K467w1ZZ0CgYEAvGek
dhVFMYd7OLJ4XREp981j1pk8gw5IGM1Y+CsrjYnPJsNMqf6pXsIeIQGwQ/f6qutK
ehu+AGY1N5wzTwYGnQHpl4tcIw7mT16s7ETKlqRwSsB1WQ3em2hG0fIinFGGxBZZ
4GgFcMuvKFLcjYyB6YzJ/nRRUZpo8SQzDZuVmpkCgYAEjzR/+2MLRyXtcRKo9mNj
PkRz0MQovPVIwiUZsDk2u1Cp8HKI0fYlEHuA3frm5U4WYiDKQe/Kfv7M1LpzBh8G
9OwX8XLZUUd5Zwp97Fzsao1C2paQEUpXuKnVHZl7TLvPkJ1sWEwnzaBpwr4m9qny
3zeo9kk4odMeuZY9MFmGxQKBgBb0hcxBYTHcsP3CePnV6ogfxUdTWlUZe11SP8HU
+LSBEvVFHGUl+xrpieQ5oXFWmHsUuflQwgCoc1l4NaQuNsYQgpaNS0eWPCd1gJo0
834RQQFKm8Gi9/l1ZhOUbfUf1cy0cHTwF6Gbn5bJKcgxU27SUZYoM/Q+XQTshS/m
Qf8ZAoGAbDh+4zb/rttwlhWvcdIPuDQXHIebN+dE+NvN7wMW1OzHPX6KKM/9ejqw
3wP0Y22GsvG430p7w26imuLUuvTMm3mrt4EvgVePL5wCh0oQBVAdxOIBRKTJkGDu
pFNGvKWziXoDCFblbpvxVBKHCPblk21GHXPTh3uOvywOD2agCn8=
-----END RSA PRIVATE KEY-----`

export async function generateJwToken(user: User) {
    const token = jwt.sign(JSON.stringify(user), privateKey, {algorithm: 'RS256'});
    return token;
}

export async function verifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        console.log(decoded as User)
        return decoded as User; // Retorna o objeto do tipo User
    } catch (err: any) {
        console.error('Invalid token:', err.message);
        return null; // Token inválido ou erro na verificação
    }
}