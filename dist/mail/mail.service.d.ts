import { MailerService } from "@nestjs-modules/mailer";
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(email: string, token: string): Promise<void>;
}
