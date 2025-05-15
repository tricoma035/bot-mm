import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Key, Plus, Search, Eye, EyeOff, Copy, Trash2, Clock, RefreshCw, Shield } from "lucide-react"
import Link from "next/link"
import DashboardNav from "@/components/dashboard-nav"

export default function ApiKeys() {
  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardNav />

      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Claves API</h1>
            <p className="text-gray-400 mt-1">Gestiona tus claves API y tokens de acceso.</p>
          </div>
          <Link href="/api-keys/create" className="mt-4 md:mt-0">
            <Button className="bg-green-600 hover:bg-green-700 text-black">
              <Plus className="mr-2 h-4 w-4" /> Generar Nueva Clave
            </Button>
          </Link>
        </div>

        <Card className="bg-gray-900 border-green-900/40 mb-8">
          <CardHeader>
            <CardTitle>Tus Claves API</CardTitle>
            <CardDescription className="text-gray-400">
              Gestiona y monitoriza tus claves API. Mantenlas seguras y nunca las compartas públicamente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar claves API..."
                  className="pl-10 bg-black border-green-900/40 focus:border-green-500/40 text-white"
                />
              </div>
              <Button variant="outline" className="ml-4 border-green-900/40 text-green-500 hover:bg-green-900/20">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-md border border-green-900/40 overflow-hidden">
              <Table>
                <TableHeader className="bg-black">
                  <TableRow className="hover:bg-gray-900/50 border-green-900/40">
                    <TableHead className="text-gray-400 font-medium">Nombre</TableHead>
                    <TableHead className="text-gray-400 font-medium">Clave</TableHead>
                    <TableHead className="text-gray-400 font-medium">Creada</TableHead>
                    <TableHead className="text-gray-400 font-medium">Último uso</TableHead>
                    <TableHead className="text-gray-400 font-medium">Estado</TableHead>
                    <TableHead className="text-gray-400 font-medium text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Clave API Producción",
                      created: "10 Abr, 2025",
                      lastUsed: "hace 2 horas",
                      status: "Activa",
                    },
                    { name: "Clave API Desarrollo", created: "25 Mar, 2025", lastUsed: "hace 1 día", status: "Activa" },
                    { name: "Clave API Pruebas", created: "15 Feb, 2025", lastUsed: "hace 1 semana", status: "Activa" },
                    { name: "Clave API Antigua", created: "05 Ene, 2025", lastUsed: "hace 1 mes", status: "Caducada" },
                  ].map((key, i) => (
                    <TableRow key={i} className="hover:bg-gray-900/50 border-green-900/40">
                      <TableCell className="font-medium">{key.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="bg-gray-800 px-3 py-1 rounded-md text-sm font-mono flex-1 mr-2">
                            ••••••••••••••••{i + 1000}
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-green-500">
                            <EyeOff className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-green-500">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> {key.created}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-400 text-sm">{key.lastUsed}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            key.status === "Activa" ? "bg-green-900/20 text-green-500" : "bg-red-900/20 text-red-500"
                          }`}
                        >
                          {key.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-green-500">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-green-900/40">
          <CardHeader>
            <CardTitle>Seguridad de Claves API</CardTitle>
            <CardDescription className="text-gray-400">
              Mejores prácticas para mantener tus claves API seguras.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="bg-green-900/20 p-2 rounded-full h-fit">
                  <Key className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Nunca compartas tus claves API</h3>
                  <p className="text-gray-400">
                    Tus claves API son credenciales sensibles. Nunca las compartas en repositorios públicos, código del
                    lado del cliente o con personas no autorizadas.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-green-900/20 p-2 rounded-full h-fit">
                  <RefreshCw className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Rota las claves regularmente</h3>
                  <p className="text-gray-400">
                    Genera nuevas claves API regularmente y desactiva las antiguas para minimizar el riesgo de acceso no
                    autorizado.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-green-900/20 p-2 rounded-full h-fit">
                  <Shield className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Usa variables de entorno</h3>
                  <p className="text-gray-400">
                    Almacena tus claves API en variables de entorno o bóvedas seguras, nunca las codifiques directamente
                    en tu aplicación.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
