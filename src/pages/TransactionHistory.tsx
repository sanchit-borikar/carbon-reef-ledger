import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { 
  History, 
  Download, 
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: string;
  date: string;
  type: 'buy' | 'sell' | 'mint' | 'transfer';
  project: string;
  amount: number;
  price: number;
  total: number;
  status: 'completed' | 'pending' | 'failed';
  txHash: string;
}

const TransactionHistory = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2024-12-20",
      type: "buy",
      project: "Sundarbans Mangrove Restoration",
      amount: 50,
      price: 45,
      total: 2250,
      status: "completed",
      txHash: "0x1234...abcd"
    },
    {
      id: "2",
      date: "2024-12-18",
      type: "sell",
      project: "Coastal Seagrass Conservation",
      amount: 25,
      price: 38,
      total: 950,
      status: "completed",
      txHash: "0x5678...efgh"
    },
    {
      id: "3",
      date: "2024-12-15",
      type: "mint",
      project: "Salt Marsh Protection Initiative",
      amount: 100,
      price: 42,
      total: 4200,
      status: "pending",
      txHash: "0x9012...ijkl"
    },
    {
      id: "4",
      date: "2024-12-12",
      type: "buy",
      project: "Mangrove Afforestation Project",
      amount: 75,
      price: 40,
      total: 3000,
      status: "completed",
      txHash: "0x3456...mnop"
    },
    {
      id: "5",
      date: "2024-12-10",
      type: "transfer",
      project: "Sundarbans Mangrove Restoration",
      amount: 30,
      price: 0,
      total: 0,
      status: "completed",
      txHash: "0x7890...qrst"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success-green/20 text-success-green';
      case 'pending': return 'bg-warning-amber/20 text-warning-amber';
      case 'failed': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'buy': return <ArrowDownLeft className="w-4 h-4 text-success-green" />;
      case 'sell': return <ArrowUpRight className="w-4 h-4 text-ocean-blue" />;
      case 'mint': return <Coins className="w-4 h-4 text-carbon-gold" />;
      case 'transfer': return <ArrowUpRight className="w-4 h-4 text-teal-accent" />;
      default: return <History className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'buy': return 'text-success-green';
      case 'sell': return 'text-ocean-blue';
      case 'mint': return 'text-carbon-gold';
      case 'transfer': return 'text-teal-accent';
      default: return 'text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const totalValue = transactions
    .filter(tx => tx.status === 'completed')
    .reduce((sum, tx) => sum + tx.total, 0);

  const completedTransactions = transactions.filter(tx => tx.status === 'completed').length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Transaction History
                </h1>
                <p className="text-muted-foreground">
                  View all your carbon credit transactions
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <Coins className="h-4 w-4 text-carbon-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</div>
                <p className="text-xs text-success-green">All completed transactions</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <History className="h-4 w-4 text-success-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{completedTransactions}</div>
                <p className="text-xs text-muted-foreground">Successful transactions</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-ocean-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">8</div>
                <p className="text-xs text-success-green">+2 from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Transactions Table */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5 text-ocean-blue" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div 
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center">
                        {getTypeIcon(transaction.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-medium capitalize ${getTypeColor(transaction.type)}`}>
                            {transaction.type}
                          </span>
                          <Badge className={getStatusColor(transaction.status)}>
                            {transaction.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {transaction.project}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(transaction.date)} • TX: {transaction.txHash}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">
                          {transaction.amount} credits
                        </span>
                        {transaction.price > 0 && (
                          <span className="text-sm text-muted-foreground">
                            @ ${transaction.price}
                          </span>
                        )}
                      </div>
                      {transaction.total > 0 && (
                        <p className="text-sm font-medium text-foreground">
                          ${transaction.total.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-6">
                <Button variant="outline">
                  Load More Transactions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;