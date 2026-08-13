import { cryptoProvider } from "./cryptoProvider";
import * as crypto from 'crypto'



export class AesCryptoService implements cryptoProvider{
   
  private readonly algorithm = 'aes-256-ctr';
  private readonly secretKey = crypto.scryptSync('chave-secreta-do-desafio', 'salt', 32);
  private readonly iv = crypto.randomBytes(16);

    encrypt(text: string): string {

    const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, this.iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return `${this.iv.toString('hex')}:${encrypted.toString('hex')}`;
    
   }


   dencrypt(text: string): string {

    const [ivHex, encryptedHex] = cipherText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedText = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decrypted.toString();

   }
} 