import * as moment from "moment";
import { Md5 } from 'ts-md5/dist/md5';

export class StringUtils {
    public static ERRO_TITULO = 'Oops! :(';

    public static ERRO_MENSAGEM = 'Something is not right. Please, try again later.';

    public static USERNAME = "johndoe@gmail.com";

    public static PASSWORD = "123456";

    public static CryptoText(text: string) {
        const md5 = new Md5();

        return md5.appendStr(text).end().toString();
    }

    public static GetFormattedDate(date: Date) {
        return moment(new Date()).format("MM/DD/yyyy");
    }
}