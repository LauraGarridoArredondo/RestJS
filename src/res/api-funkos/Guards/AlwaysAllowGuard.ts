import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class AlwaysAllowGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    return true // Siempre permitimos el acceso
  }
}
