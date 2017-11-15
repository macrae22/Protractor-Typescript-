import { Config } from 'protractor';
import { config as baseConfig } from "./conf";

export const config: Config = {
    ...baseConfig,
    params: {
        environment: 'https://qa-web.bud.co.uk'
    }
}