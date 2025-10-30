import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuyClick = (item: any) => {
    setSelectedItem(item);
    setIsPaymentOpen(true);
  };

  const handlePayment = () => {
    alert(`Оплата ${selectedItem?.name} через ${paymentMethod === 'card' ? 'карту' : 'СБП'} на сумму ${selectedItem?.price}`);
    setIsPaymentOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-2xl font-black text-primary-foreground">W</span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                WORLD <span className="text-primary">RP</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['home', 'rules', 'donate', 'news', 'servers'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-semibold transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'rules' && 'Правила'}
                  {section === 'donate' && 'Донат'}
                  {section === 'news' && 'Новости'}
                  {section === 'servers' && 'Сервера'}
                </button>
              ))}
            </div>

            <Button size="lg" className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать лаунчер
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground font-bold px-4 py-2">
                🎮 Лучший RolePlay сервер 2024
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Добро пожаловать в
                <span className="block text-primary mt-2">WORLD RP</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Окунитесь в мир настоящего ролевого отыгрыша. Создайте свою историю в крупнейшем игровом сообществе MTA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8">
                  <Icon name="Download" size={24} className="mr-2" />
                  Скачать лаунчер
                </Button>
                <Button size="lg" variant="outline" className="font-bold text-lg h-14 px-8 border-2">
                  <Icon name="Play" size={24} className="mr-2" />
                  Смотреть трейлер
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-black text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Работа серверов</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Уникальных работ</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/03c4e8cf-6f2b-4ae9-b28b-6f40f6120246/files/4c3dc097-130f-45fa-81be-c5dd7d30f190.jpg" 
                alt="WORLD RP Gameplay" 
                className="relative rounded-lg shadow-2xl border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary font-bold px-4 py-2 mb-4">
              📜 Правила сервера
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Основные правила</h2>
            <p className="text-muted-foreground text-lg">Соблюдение правил обеспечивает комфортную игру для всех</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Users', title: 'RolePlay отыгрыш', desc: 'Обязательный качественный отыгрыш всех действий в игре' },
              { icon: 'Shield', title: 'Без читов', desc: 'Использование читов карается перманентной блокировкой' },
              { icon: 'MessageCircle', title: 'Уважение', desc: 'Оскорбления и токсичность строго запрещены' },
              { icon: 'Car', title: 'DM/DB запрещен', desc: 'DeathMatch и DriveBy запрещены без RP причин' },
              { icon: 'Briefcase', title: 'Meta-Gaming', desc: 'Использование информации вне игрового персонажа запрещено' },
              { icon: 'AlertTriangle', title: 'PowerGaming', desc: 'Невозможные в реальности действия запрещены' }
            ].map((rule, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={rule.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{rule.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-bold border-2">
              Читать полные правила
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary font-bold px-4 py-2 mb-4">
              💎 Поддержка проекта
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Донат привилегии</h2>
            <p className="text-muted-foreground text-lg">Получи преимущества и помоги развитию сервера</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Скин на выбор', price: '300₽', icon: 'User', color: 'border-primary/50', desc: 'Уникальный скин персонажа' },
              { name: 'Игровая валюта', price: '500₽', icon: 'Coins', color: 'border-secondary/50', desc: '150 000 000 внутриигровых денег', value: '150 000 000' },
              { name: 'Автомобиль на выбор', price: '400₽', icon: 'Car', color: 'border-primary/50', desc: 'Любой автомобиль из каталога' },
              { name: 'Донат валюта', price: '400₽', icon: 'Gem', color: 'border-secondary/50', desc: '5000 донат-валюты', value: '5000 DC' }
            ].map((item, index) => (
              <Card key={index} className={`border-2 ${item.color} hover:scale-105 transition-transform`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-black mb-2">{item.name}</CardTitle>
                  <div className="text-3xl font-black text-primary mb-1">{item.price}</div>
                  {item.value && (
                    <Badge className="bg-secondary/20 text-secondary font-bold">{item.value}</Badge>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Button onClick={() => handleBuyClick(item)} className="w-full bg-primary hover:bg-primary/90 font-bold">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary font-bold px-4 py-2 mb-4">
              📰 Последние новости
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Новости проекта</h2>
          </div>

          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all" className="font-bold">Все новости</TabsTrigger>
              <TabsTrigger value="updates" className="font-bold">Обновления</TabsTrigger>
              <TabsTrigger value="events" className="font-bold">События</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              {[
                { date: '25 окт 2024', title: 'Масштабное обновление 2.0', desc: 'Новая система фракций, обновленная карта и множество улучшений', badge: 'Обновление' },
                { date: '20 окт 2024', title: 'Хэллоуин ивент 2024', desc: 'Специальное мероприятие с уникальными наградами', badge: 'Событие' },
                { date: '15 окт 2024', title: 'Новый сервер Phoenix', desc: 'Открытие третьего сервера для комфортной игры', badge: 'Новость' }
              ].map((news, index) => (
                <Card key={index} className="hover:border-primary transition-colors border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge className="bg-primary/10 text-primary font-bold">{news.badge}</Badge>
                        <CardTitle className="text-2xl">{news.title}</CardTitle>
                        <CardDescription className="text-base">{news.desc}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="updates">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Обновления в разработке</CardTitle>
                  <CardDescription>Следите за новостями проекта</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            
            <TabsContent value="events">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Предстоящие события</CardTitle>
                  <CardDescription>Скоро будут анонсированы новые ивенты</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="servers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary font-bold px-4 py-2 mb-4">
              🖥️ Наши сервера
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Выбери свой сервер</h2>
            <p className="text-muted-foreground text-lg">Три игровых мира с уникальными особенностями</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Phoenix', players: '1847/2000', status: 'online', desc: 'Основной сервер с полным функционалом' },
              { name: 'Dragon', players: '1634/2000', status: 'online', desc: 'Сервер для опытных игроков' },
              { name: 'Griffin', players: '521/2000', status: 'online', desc: 'Новый сервер для новичков' }
            ].map((server, index) => (
              <Card key={index} className="border-2 border-primary/30 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-black">{server.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-primary">{server.status.toUpperCase()}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">{server.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Игроков онлайн:</span>
                    <span className="font-bold text-primary">{server.players}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                    <Icon name="LogIn" size={20} className="mr-2" />
                    Подключиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="sm:max-w-md bg-card border-2 border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">Оплата</DialogTitle>
            <DialogDescription>
              {selectedItem && (
                <div className="flex items-center justify-between py-4 border-b border-border">
                  <span className="text-lg">{selectedItem.name}</span>
                  <span className="text-2xl font-black text-primary">{selectedItem.price}</span>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <Label className="text-base font-bold">Способ оплаты</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                    <div>
                      <div className="font-bold">Банковская карта</div>
                      <div className="text-sm text-muted-foreground">Visa, Mastercard, МИР</div>
                    </div>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="sbp" id="sbp" />
                  <Label htmlFor="sbp" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Icon name="Smartphone" size={24} className="text-primary" />
                    <div>
                      <div className="font-bold">СБП</div>
                      <div className="text-sm text-muted-foreground">Система быстрых платежей</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-6 bg-primary/5 border-2 border-primary/30 rounded-lg space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Landmark" size={20} className="text-primary" />
                    <span className="font-bold">Реквизиты для перевода</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Номер карты</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-lg font-bold text-primary bg-background px-3 py-2 rounded border flex-1">
                          2202 2068 4533 6432
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText('2202206845336432');
                            alert('Номер карты скопирован!');
                          }}
                          className="border-2"
                        >
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">Получатель</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-base font-bold bg-background px-3 py-2 rounded border flex-1">
                          Александр Николаевич Т
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText('Александр Николаевич Т');
                            alert('ФИО скопировано!');
                          }}
                          className="border-2"
                        >
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">Сумма к оплате</Label>
                      <div className="text-2xl font-black text-primary mt-1">
                        {selectedItem?.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground p-3 bg-background rounded-lg border">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    После перевода напишите в поддержку с подтверждением платежа
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'sbp' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-6 bg-primary/5 border-2 border-primary/30 rounded-lg space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Smartphone" size={20} className="text-primary" />
                    <span className="font-bold">Перевод по номеру телефона</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Номер телефона (СБП)</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-lg font-bold text-primary bg-background px-3 py-2 rounded border flex-1">
                          +7 (XXX) XXX-XX-XX
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            alert('Укажите номер телефона для СБП');
                          }}
                          className="border-2"
                        >
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">Получатель</Label>
                      <div className="text-base font-bold bg-background px-3 py-2 rounded border">
                        Александр Николаевич Т
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">Сумма к оплате</Label>
                      <div className="text-2xl font-black text-primary mt-1">
                        {selectedItem?.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground p-3 bg-background rounded-lg border">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Откройте приложение банка, выберите СБП и переведите по номеру телефона
                  </div>
                </div>
              </div>
            )}

            <Button 
              onClick={handlePayment} 
              className="w-full h-12 bg-primary hover:bg-primary/90 font-bold text-lg"
            >
              <Icon name="Check" size={20} className="mr-2" />
              Я перевёл деньги
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="py-12 px-4 border-t border-border mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <span className="text-2xl font-black text-primary-foreground">W</span>
                </div>
                <span className="text-xl font-black">WORLD RP</span>
              </div>
              <p className="text-sm text-muted-foreground">Лучший MTA RolePlay проект 2024 года</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary">Главная</button></li>
                <li><button onClick={() => scrollToSection('rules')} className="hover:text-primary">Правила</button></li>
                <li><button onClick={() => scrollToSection('donate')} className="hover:text-primary">Донат</button></li>
                <li><button onClick={() => scrollToSection('news')} className="hover:text-primary">Новости</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Сообщество</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Discord</a></li>
                <li><a href="#" className="hover:text-primary">VK</a></li>
                <li><a href="#" className="hover:text-primary">YouTube</a></li>
                <li><a href="#" className="hover:text-primary">Telegram</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@worldrp.ru</li>
                <li>© 2024 WORLD RP</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}