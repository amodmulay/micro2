const Header = () => {
    const disadvantages = [
      "Increased Complexity in Integration",
      "Shared State Management Challenges",
      "Potential for Redundant Dependencies",
      "Performance Overhead from Multiple Builds",
      "Styling Conflicts Across Microfrontends",
      "Testing Across Boundaries Can Be Difficult",
      "Higher Initial Setup Costs",
      "Coordination Overhead Between Teams",
      "Version Mismatches Between Shared Libraries",
      "Infrastructure Requirements for Hosting Multiple Microfrontends",
      "Debugging Can Be More Complicated",
      "Latency in Loading Remote Components",
      "Limited Support for Legacy Systems",
      "Harder to Achieve Consistent User Experience",
      "Deployment Order Dependencies (if not handled properly)",
    ];
  
    return (
      <header style={{ padding: '20px', backgroundColor: '#ffe4e1' }}>
        <h1>Disadvantages of Micro Frontends</h1>
        <ul style={{ lineHeight: '1.8' }}>
          {disadvantages.map((disadvantage, index) => (
            <li key={index}>{disadvantage}</li>
          ))}
        </ul>
      </header>
    );
  };
  
  export default Header;
  