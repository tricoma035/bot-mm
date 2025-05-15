import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Copy, Key } from "lucide-react"
import Link from "next/link"
import DashboardNav from "@/components/dashboard-nav"

export default function CreateApiKey() {
  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardNav />

      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="mb-8">
          <Link href="/api-keys" className="text-gray-400 hover:text-green-500 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Claves API
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight mb-6">Generar Nueva Clave API</h1>

            <Card className="bg-gray-900 border-green-900/40 mb-6">
              <CardHeader>
                <CardTitle>Detalles de la Clave</CardTitle>
                <CardDescription className="text-gray-400">
                  Configura los ajustes de tu nueva clave API.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="key-name">Nombre de la Clave</Label>
                  <Input
                    id="key-name"
                    placeholder="ej., Clave API de Producción"
                    className="bg-black border-green-900/40 focus:border-green-500/40 text-white"
                  />
                  <p className="text-sm text-gray-400">
                    Da a tu clave un nombre descriptivo para identificar su propósito.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiration">Caducidad</Label>
                  <Select>
                    <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                      <SelectValue placeholder="Selecciona tiempo de caducidad" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                      <SelectItem value="never">Nunca</SelectItem>
                      <SelectItem value="30days">30 días</SelectItem>
                      <SelectItem value="90days">90 días</SelectItem>
                      <SelectItem value="1year">1 año</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-400">
                    Establece una fecha de caducidad para la rotación automática de claves.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="permissions">Permisos</Label>
                  <Select>
                    <SelectTrigger className="bg-black border-green-900/40 focus:border-green-500/40 text-white">
                      <SelectValue placeholder="Selecciona nivel de permisos" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-green-900/40 text-white">
                      <SelectItem value="readonly">Solo Lectura</SelectItem>
                      <SelectItem value="readwrite">Lectura y Escritura</SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-400">Controla qué acciones puede realizar esta clave API.</p>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="rate-limit" className="flex-1">
                      Habilitar Límite de Tasa
                    </Label>
                    <Switch id="rate-limit" />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Limita el número de peticiones que esta clave puede hacer por minuto.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ip-restrict" className="flex-1">
                      Restricciones IP
                    </Label>
                    <Switch id="ip-restrict" />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Restringe el uso de la clave API a direcciones IP específicas.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-black">
                  <Key className="mr-2 h-4 w-4" /> Generar Clave API
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-6">Vista Previa</h2>

            <Card className="bg-gray-900 border-green-900/40 mb-6">
              <CardHeader>
                <CardTitle>Tu Nueva Clave API</CardTitle>
                <CardDescription className="text-gray-400">
                  Esta será tu única oportunidad de ver esta clave API.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-black rounded-md border border-green-900/40">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-gray-400">Clave API</Label>
                    <Button variant="ghost" size="sm" className="h-8 text-gray-400 hover:text-green-500">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="font-mono text-green-500 break-all">botmm_sk_••••••••••••••••••••••••••••••</div>
                  <p className="text-xs text-gray-400 mt-2">Tu clave API se mostrará aquí después de generarla.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nombre:</span>
                    <span>No establecido</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Creada:</span>
                    <span>Aún no creada</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Caduca:</span>
                    <span>No establecido</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Permisos:</span>
                    <span>No establecido</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="bg-green-900/20 p-4 rounded-md border border-green-900/40 w-full">
                  <h3 className="font-medium text-green-500 mb-2 flex items-center">
                    <Key className="h-4 w-4 mr-2" /> Aviso de Seguridad Importante
                  </h3>
                  <p className="text-sm text-gray-400">
                    Esta clave API solo se mostrará una vez. Asegúrate de copiarla y almacenarla de forma segura. Por
                    razones de seguridad, no podemos mostrarla de nuevo.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
