'use client'

export default function Features() {

  return (
    <section id="features" className="py-20 bg-gray-50">
    <h2 className="text-5xl text-center font-bold mb-16 text-gray-800">Features</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Investment Portfolio Tracker</h3>
        <p>Track and manage all your investments in one place with detailed insights and analytics.</p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Track Your Net Worth</h3>
        <p>Monitor your net worth growth with visually appealing, real-time graphs and stats.</p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Financial Goal Tracker</h3>
        <p>Set financial goals, track your progress, and get actionable insights to stay on course.</p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Track Stock Portfolio</h3>
        <p>Stay up to date with your stock investments and receive real-time updates and alerts.</p>
      </div>

      {/* Feature 5 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Track NPS Balance</h3>
        <p>Easily monitor your National Pension System (NPS) balance with detailed records.</p>
      </div>

      {/* Feature 6 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Track Savings Accounts</h3>
        <p>View and manage all your savings accounts in one place, with detailed statements and analysis.</p>
      </div>

      {/* Feature 7 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Check Free Credit Score</h3>
        <p>Get your free credit score and personalized advice on improving your credit health.</p>
      </div>

      {/* Feature 8 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Check Credit Card Statements</h3>
        <p>Track your credit card spending and statements across multiple accounts.</p>
      </div>

      {/* Feature 9 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Track ESOPs</h3>
        <p>Manage your Employee Stock Ownership Plans (ESOPs) with comprehensive tracking.</p>
      </div>

      {/* Feature 10 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-semibold mb-4">Mutual Fund Portfolio Scan</h3>
        <p>Analyze your mutual fund portfolio and receive expert recommendations.</p>
      </div>
    </div>
  </section>
  )
}
