import { Config } from 'protractor';
import { config as baseConfig } from "./conf";

export const config: Config = {
    ...baseConfig,
    params: {
        environment: 'https://develop-web.bud.co.uk/'
    }
}